module.exports = async function (context, req) {
  const date = "2024-10-08T23:12:00.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

