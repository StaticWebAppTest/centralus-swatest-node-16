module.exports = async function (context, req) {
  const date = "2022-09-21T16:16:49.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

