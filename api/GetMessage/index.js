module.exports = async function (context, req) {
  const date = "2025-05-30T17:11:38.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

