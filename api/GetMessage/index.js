module.exports = async function (context, req) {
  const date = "2024-06-13T23:10:17.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

