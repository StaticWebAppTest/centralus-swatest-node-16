module.exports = async function (context, req) {
  const date = "2024-04-13T15:06:34.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

