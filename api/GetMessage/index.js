module.exports = async function (context, req) {
  const date = "2024-11-28T10:13:53.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

