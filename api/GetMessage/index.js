module.exports = async function (context, req) {
  const date = "2025-01-18T14:10:09.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

