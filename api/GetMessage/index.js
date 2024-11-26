module.exports = async function (context, req) {
  const date = "2024-11-26T10:13:36.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

