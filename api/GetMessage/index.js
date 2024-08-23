module.exports = async function (context, req) {
  const date = "2024-08-23T15:12:26.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

