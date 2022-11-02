module.exports = async function (context, req) {
  const date = "2022-11-02T05:40:40.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

