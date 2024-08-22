module.exports = async function (context, req) {
  const date = "2024-08-22T14:10:17.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

