module.exports = async function (context, req) {
  const date = "2025-05-18T23:12:15.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

