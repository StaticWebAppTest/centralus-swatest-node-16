module.exports = async function (context, req) {
  const date = "2024-04-21T05:09:33.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

