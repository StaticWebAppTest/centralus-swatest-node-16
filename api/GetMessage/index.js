module.exports = async function (context, req) {
  const date = "2022-10-02T22:12:26.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

