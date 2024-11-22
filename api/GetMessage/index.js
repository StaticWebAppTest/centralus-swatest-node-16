module.exports = async function (context, req) {
  const date = "2024-11-22T10:13:30.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

