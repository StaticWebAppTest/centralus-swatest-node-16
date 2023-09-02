module.exports = async function (context, req) {
  const date = "2023-09-02T23:07:37.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

