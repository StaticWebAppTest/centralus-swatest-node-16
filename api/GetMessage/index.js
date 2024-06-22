module.exports = async function (context, req) {
  const date = "2024-06-22T16:12:14.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

