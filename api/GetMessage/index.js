module.exports = async function (context, req) {
  const date = "2024-08-01T23:10:46.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

