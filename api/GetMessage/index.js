module.exports = async function (context, req) {
  const date = "2022-08-02T11:09:51.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

