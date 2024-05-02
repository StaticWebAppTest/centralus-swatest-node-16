module.exports = async function (context, req) {
  const date = "2024-05-02T08:12:39.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

