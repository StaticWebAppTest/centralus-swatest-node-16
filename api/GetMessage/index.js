module.exports = async function (context, req) {
  const date = "2024-08-17T09:10:04.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

