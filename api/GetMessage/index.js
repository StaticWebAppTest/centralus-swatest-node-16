module.exports = async function (context, req) {
  const date = "2022-08-02T13:34:33.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

