module.exports = async function (context, req) {
  const date = "2024-03-09T03:12:24.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

