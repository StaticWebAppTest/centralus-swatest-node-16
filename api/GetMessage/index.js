module.exports = async function (context, req) {
  const date = "2025-05-08T23:13:13.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

