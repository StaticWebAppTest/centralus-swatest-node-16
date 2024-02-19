module.exports = async function (context, req) {
  const date = "2024-02-19T10:10:19.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

