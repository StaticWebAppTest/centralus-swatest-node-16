module.exports = async function (context, req) {
  const date = "2024-04-08T12:16:33.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

