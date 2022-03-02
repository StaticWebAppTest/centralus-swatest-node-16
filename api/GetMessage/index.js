module.exports = async function (context, req) {
  const date = "2022-03-02T12:16:01.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

