module.exports = async function (context, req) {
  const date = "2024-03-20T23:10:32.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

