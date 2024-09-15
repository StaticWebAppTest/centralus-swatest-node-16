module.exports = async function (context, req) {
  const date = "2024-09-15T13:14:53.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

