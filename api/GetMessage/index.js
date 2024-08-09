module.exports = async function (context, req) {
  const date = "2024-08-09T23:10:24.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

