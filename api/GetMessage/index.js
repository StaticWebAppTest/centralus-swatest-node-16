module.exports = async function (context, req) {
  const date = "2025-01-09T09:12:30.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

