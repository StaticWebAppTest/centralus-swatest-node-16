module.exports = async function (context, req) {
  const date = "2024-08-22T05:10:46.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

