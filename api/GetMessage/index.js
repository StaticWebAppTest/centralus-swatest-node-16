module.exports = async function (context, req) {
  const date = "2023-09-02T03:08:34.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

