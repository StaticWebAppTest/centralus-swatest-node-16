module.exports = async function (context, req) {
  const date = "2025-06-12T19:10:35.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

