module.exports = async function (context, req) {
  const date = "2024-07-31T13:13:57.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

