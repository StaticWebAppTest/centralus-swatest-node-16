module.exports = async function (context, req) {
  const date = "2024-11-26T13:23:04.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

