module.exports = async function (context, req) {
  const date = "2024-03-01T18:12:38.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

