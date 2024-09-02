module.exports = async function (context, req) {
  const date = "2024-09-02T22:10:51.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

