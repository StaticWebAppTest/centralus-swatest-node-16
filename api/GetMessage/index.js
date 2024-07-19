module.exports = async function (context, req) {
  const date = "2024-07-19T14:11:11.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

