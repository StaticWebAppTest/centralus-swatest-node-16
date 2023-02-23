module.exports = async function (context, req) {
  const date = "2023-02-23T03:12:28.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

