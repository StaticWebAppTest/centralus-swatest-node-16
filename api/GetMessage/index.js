module.exports = async function (context, req) {
  const date = "2025-05-06T10:14:15.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

