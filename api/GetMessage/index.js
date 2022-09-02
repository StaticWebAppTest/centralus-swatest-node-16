module.exports = async function (context, req) {
  const date = "2022-09-02T10:12:49.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

