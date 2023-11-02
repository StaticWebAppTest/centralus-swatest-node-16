module.exports = async function (context, req) {
  const date = "2023-11-02T21:08:01.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

