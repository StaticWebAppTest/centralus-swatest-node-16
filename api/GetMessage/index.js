module.exports = async function (context, req) {
  const date = "2023-03-30T20:09:49.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

