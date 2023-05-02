module.exports = async function (context, req) {
  const date = "2023-05-02T22:08:05.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

