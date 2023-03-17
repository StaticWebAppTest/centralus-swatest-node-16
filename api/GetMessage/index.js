module.exports = async function (context, req) {
  const date = "2023-03-17T13:17:05.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

