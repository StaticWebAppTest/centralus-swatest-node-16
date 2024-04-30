module.exports = async function (context, req) {
  const date = "2024-04-30T09:11:04.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

