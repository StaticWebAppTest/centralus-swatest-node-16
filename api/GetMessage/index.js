module.exports = async function (context, req) {
  const date = "2024-04-03T11:07:31.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

