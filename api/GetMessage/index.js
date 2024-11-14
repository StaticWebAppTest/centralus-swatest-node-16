module.exports = async function (context, req) {
  const date = "2024-11-14T21:11:12.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

