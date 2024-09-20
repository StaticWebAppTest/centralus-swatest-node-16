module.exports = async function (context, req) {
  const date = "2024-09-20T05:11:28.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

