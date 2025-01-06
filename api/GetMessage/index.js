module.exports = async function (context, req) {
  const date = "2025-01-06T07:12:08.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

