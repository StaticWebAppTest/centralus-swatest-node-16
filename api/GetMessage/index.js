module.exports = async function (context, req) {
  const date = "2024-03-10T11:07:35.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

