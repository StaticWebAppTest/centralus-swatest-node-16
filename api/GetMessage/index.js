module.exports = async function (context, req) {
  const date = "2022-05-02T10:12:46.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

