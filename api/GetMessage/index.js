module.exports = async function (context, req) {
  const date = "2025-03-12T08:17:03.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

