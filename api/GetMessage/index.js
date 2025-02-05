module.exports = async function (context, req) {
  const date = "2025-02-05T22:10:44.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

