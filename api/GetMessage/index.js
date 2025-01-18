module.exports = async function (context, req) {
  const date = "2025-01-18T15:10:23.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

