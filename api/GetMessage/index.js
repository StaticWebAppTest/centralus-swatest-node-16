module.exports = async function (context, req) {
  const date = "2025-04-01T10:14:19.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

