module.exports = async function (context, req) {
  const date = "2024-06-06T16:12:35.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

