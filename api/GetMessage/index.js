module.exports = async function (context, req) {
  const date = "2024-08-07T15:10:40.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

