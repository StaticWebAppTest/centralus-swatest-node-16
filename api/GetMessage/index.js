module.exports = async function (context, req) {
  const date = "2023-04-27T04:10:39.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

