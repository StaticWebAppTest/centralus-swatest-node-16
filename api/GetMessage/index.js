module.exports = async function (context, req) {
  const date = "2024-10-08T16:14:29.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

