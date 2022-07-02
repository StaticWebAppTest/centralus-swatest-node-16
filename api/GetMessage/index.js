module.exports = async function (context, req) {
  const date = "2022-07-02T06:12:34.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

