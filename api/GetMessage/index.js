module.exports = async function (context, req) {
  const date = "2024-08-10T12:18:33.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

