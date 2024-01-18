module.exports = async function (context, req) {
  const date = "2024-01-18T14:09:04.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

