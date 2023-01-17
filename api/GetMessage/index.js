module.exports = async function (context, req) {
  const date = "2023-01-17T09:09:47.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

