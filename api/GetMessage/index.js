module.exports = async function (context, req) {
  const date = "2023-02-01T19:07:54.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

