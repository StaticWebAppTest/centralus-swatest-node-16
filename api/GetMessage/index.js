module.exports = async function (context, req) {
  const date = "2024-09-13T23:10:53.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

