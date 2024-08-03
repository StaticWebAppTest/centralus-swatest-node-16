module.exports = async function (context, req) {
  const date = "2024-08-03T03:11:20.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

