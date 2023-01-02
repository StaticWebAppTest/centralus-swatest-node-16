module.exports = async function (context, req) {
  const date = "2023-01-02T07:09:02.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

