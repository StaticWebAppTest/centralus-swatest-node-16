module.exports = async function (context, req) {
  const date = "2024-08-31T09:10:55.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

