module.exports = async function (context, req) {
  const date = "2022-12-09T09:09:41.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

