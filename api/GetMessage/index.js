module.exports = async function (context, req) {
  const date = "2023-07-17T21:08:33.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

