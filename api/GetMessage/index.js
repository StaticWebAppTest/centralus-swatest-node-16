module.exports = async function (context, req) {
  const date = "2023-07-02T22:08:16.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

