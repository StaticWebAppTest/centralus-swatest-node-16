module.exports = async function (context, req) {
  const date = "2023-02-13T08:13:49.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

