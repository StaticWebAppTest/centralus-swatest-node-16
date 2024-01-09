module.exports = async function (context, req) {
  const date = "2024-01-09T03:10:22.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

