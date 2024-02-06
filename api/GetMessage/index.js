module.exports = async function (context, req) {
  const date = "2024-02-06T03:10:24.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

