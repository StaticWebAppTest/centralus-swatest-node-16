module.exports = async function (context, req) {
  const date = "2025-01-12T20:11:50.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

