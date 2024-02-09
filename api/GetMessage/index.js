module.exports = async function (context, req) {
  const date = "2024-02-09T10:09:31.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

