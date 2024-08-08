module.exports = async function (context, req) {
  const date = "2024-08-08T23:11:17.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

