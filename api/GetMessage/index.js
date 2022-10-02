module.exports = async function (context, req) {
  const date = "2022-10-02T05:41:30.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

