module.exports = async function (context, req) {
  const date = "2022-04-02T08:12:37.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

