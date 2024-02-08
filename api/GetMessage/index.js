module.exports = async function (context, req) {
  const date = "2024-02-08T10:09:12.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

