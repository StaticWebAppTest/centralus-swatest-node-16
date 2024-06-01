module.exports = async function (context, req) {
  const date = "2024-06-01T23:10:04.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

