module.exports = async function (context, req) {
  const date = "2023-03-17T15:09:58.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

