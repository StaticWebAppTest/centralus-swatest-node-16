module.exports = async function (context, req) {
  const date = "2025-03-08T10:10:37.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

