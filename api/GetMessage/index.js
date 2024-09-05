module.exports = async function (context, req) {
  const date = "2024-09-05T09:11:37.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

