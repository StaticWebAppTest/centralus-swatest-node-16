module.exports = async function (context, req) {
  const date = "2023-06-17T11:07:49.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

