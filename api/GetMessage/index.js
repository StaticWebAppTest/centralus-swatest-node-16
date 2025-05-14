module.exports = async function (context, req) {
  const date = "2025-05-14T23:11:24.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

