module.exports = async function (context, req) {
  const date = "2023-11-01T03:09:37.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

