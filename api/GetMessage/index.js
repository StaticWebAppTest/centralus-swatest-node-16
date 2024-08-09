module.exports = async function (context, req) {
  const date = "2024-08-09T03:12:04.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

