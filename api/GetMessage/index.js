module.exports = async function (context, req) {
  const date = "2022-07-09T00:52:33.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

