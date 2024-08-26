module.exports = async function (context, req) {
  const date = "2024-08-26T17:10:01.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

