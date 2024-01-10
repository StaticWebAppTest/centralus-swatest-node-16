module.exports = async function (context, req) {
  const date = "2024-01-10T19:07:34.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

