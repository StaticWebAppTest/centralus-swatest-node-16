module.exports = async function (context, req) {
  const date = "2024-03-08T02:16:01.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

