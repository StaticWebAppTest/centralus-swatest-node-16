module.exports = async function (context, req) {
  const date = "2024-11-27T02:56:01.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

