module.exports = async function (context, req) {
  const date = "2025-12-27T19:10:25.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

