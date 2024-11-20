module.exports = async function (context, req) {
  const date = "2024-11-20T22:11:35.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

