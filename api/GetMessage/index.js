module.exports = async function (context, req) {
  const date = "2024-01-17T18:12:16.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

