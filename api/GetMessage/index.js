module.exports = async function (context, req) {
  const date = "2024-01-10T00:44:19.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

