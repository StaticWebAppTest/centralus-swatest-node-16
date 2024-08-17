module.exports = async function (context, req) {
  const date = "2024-08-17T13:10:54.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

