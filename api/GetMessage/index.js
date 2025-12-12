module.exports = async function (context, req) {
  const date = "2025-12-12T20:15:33.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

