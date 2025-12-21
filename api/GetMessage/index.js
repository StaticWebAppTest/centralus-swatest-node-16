module.exports = async function (context, req) {
  const date = "2025-12-21T17:11:52.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

