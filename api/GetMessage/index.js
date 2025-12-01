module.exports = async function (context, req) {
  const date = "2025-12-01T14:15:08.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

