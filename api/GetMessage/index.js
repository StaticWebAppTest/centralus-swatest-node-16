module.exports = async function (context, req) {
  const date = "2024-12-19T10:13:21.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

