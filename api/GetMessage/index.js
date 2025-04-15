module.exports = async function (context, req) {
  const date = "2025-04-15T09:14:23.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

