module.exports = async function (context, req) {
  const date = "2025-11-28T19:10:25.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

