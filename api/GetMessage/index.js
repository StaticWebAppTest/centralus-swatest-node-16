module.exports = async function (context, req) {
  const date = "2024-08-17T14:10:40.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

