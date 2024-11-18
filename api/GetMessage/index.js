module.exports = async function (context, req) {
  const date = "2024-11-18T20:13:45.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

