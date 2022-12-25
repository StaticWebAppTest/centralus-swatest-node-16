module.exports = async function (context, req) {
  const date = "2022-12-25T00:51:35.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

