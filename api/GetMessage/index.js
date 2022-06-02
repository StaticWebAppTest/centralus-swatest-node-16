module.exports = async function (context, req) {
  const date = "2022-06-02T06:14:59.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

