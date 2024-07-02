module.exports = async function (context, req) {
  const date = "2024-07-02T21:09:51.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

