module.exports = async function (context, req) {
  const date = "2024-08-16T10:11:16.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

