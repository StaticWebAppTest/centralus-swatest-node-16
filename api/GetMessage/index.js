module.exports = async function (context, req) {
  const date = "2024-06-07T18:14:01.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

