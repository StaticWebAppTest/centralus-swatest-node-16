module.exports = async function (context, req) {
  const date = "2024-12-10T14:12:31.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

