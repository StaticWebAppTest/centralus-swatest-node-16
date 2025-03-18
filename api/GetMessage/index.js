module.exports = async function (context, req) {
  const date = "2025-03-18T17:11:33.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

