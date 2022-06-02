module.exports = async function (context, req) {
  const date = "2022-06-02T20:11:54.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

