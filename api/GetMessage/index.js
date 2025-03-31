module.exports = async function (context, req) {
  const date = "2025-03-31T11:10:47.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

