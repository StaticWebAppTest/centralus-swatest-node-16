module.exports = async function (context, req) {
  const date = "2022-08-02T17:20:34.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

