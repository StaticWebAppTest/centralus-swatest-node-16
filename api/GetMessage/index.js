module.exports = async function (context, req) {
  const date = "2025-03-04T13:20:26.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

