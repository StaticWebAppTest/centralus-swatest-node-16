module.exports = async function (context, req) {
  const date = "2023-06-23T12:18:51.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

