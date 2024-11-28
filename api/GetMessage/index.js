module.exports = async function (context, req) {
  const date = "2024-11-28T22:11:22.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

