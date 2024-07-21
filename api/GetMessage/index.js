module.exports = async function (context, req) {
  const date = "2024-07-21T11:08:27.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

