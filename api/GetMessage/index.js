module.exports = async function (context, req) {
  const date = "2024-09-19T03:14:10.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

