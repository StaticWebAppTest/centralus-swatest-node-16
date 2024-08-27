module.exports = async function (context, req) {
  const date = "2024-08-27T09:11:34.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

