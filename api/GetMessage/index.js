module.exports = async function (context, req) {
  const date = "2023-07-17T19:07:41.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

