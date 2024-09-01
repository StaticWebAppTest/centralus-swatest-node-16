module.exports = async function (context, req) {
  const date = "2024-09-01T18:13:29.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

