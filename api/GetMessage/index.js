module.exports = async function (context, req) {
  const date = "2024-10-17T09:12:46.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

