module.exports = async function (context, req) {
  const date = "2022-07-21T04:36:22.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

