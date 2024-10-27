module.exports = async function (context, req) {
  const date = "2024-10-27T21:10:13.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

