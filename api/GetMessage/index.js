module.exports = async function (context, req) {
  const date = "2024-12-13T02:59:15.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

