module.exports = async function (context, req) {
  const date = "2024-01-04T16:11:12.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

