module.exports = async function (context, req) {
  const date = "2022-09-02T04:09:04.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

