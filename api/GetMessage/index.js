module.exports = async function (context, req) {
  const date = "2023-08-05T10:07:42.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

