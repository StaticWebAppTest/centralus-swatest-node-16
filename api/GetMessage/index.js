module.exports = async function (context, req) {
  const date = "2024-05-30T09:11:26.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

