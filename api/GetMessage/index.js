module.exports = async function (context, req) {
  const date = "2024-12-27T22:10:35.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

