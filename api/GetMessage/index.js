module.exports = async function (context, req) {
  const date = "2024-05-25T20:09:31.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

