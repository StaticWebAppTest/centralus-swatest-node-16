module.exports = async function (context, req) {
  const date = "2025-04-19T11:10:25.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

