module.exports = async function (context, req) {
  const date = "2025-03-31T15:13:33.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

