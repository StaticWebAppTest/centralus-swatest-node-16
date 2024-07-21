module.exports = async function (context, req) {
  const date = "2024-07-21T06:13:22.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

