module.exports = async function (context, req) {
  const date = "2024-05-01T23:10:03.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

