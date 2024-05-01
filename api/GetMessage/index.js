module.exports = async function (context, req) {
  const date = "2024-05-01T18:12:14.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

