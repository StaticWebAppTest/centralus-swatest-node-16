module.exports = async function (context, req) {
  const date = "2024-02-04T22:08:02.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

