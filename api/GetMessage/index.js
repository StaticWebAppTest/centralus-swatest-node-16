module.exports = async function (context, req) {
  const date = "2023-06-24T12:17:43.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

