module.exports = async function (context, req) {
  const date = "2024-05-19T03:11:56.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

