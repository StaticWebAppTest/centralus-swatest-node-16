module.exports = async function (context, req) {
  const date = "2023-03-21T20:09:58.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

