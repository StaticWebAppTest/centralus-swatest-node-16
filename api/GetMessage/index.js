module.exports = async function (context, req) {
  const date = "2024-11-24T23:12:01.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

