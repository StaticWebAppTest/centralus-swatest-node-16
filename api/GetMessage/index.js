module.exports = async function (context, req) {
  const date = "2025-12-01T18:23:14.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

