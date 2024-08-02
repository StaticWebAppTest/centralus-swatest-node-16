module.exports = async function (context, req) {
  const date = "2024-08-02T12:19:12.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

