module.exports = async function (context, req) {
  const date = "2023-09-17T02:16:33.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

