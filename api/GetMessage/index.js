module.exports = async function (context, req) {
  const date = "2024-07-22T23:10:28.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

