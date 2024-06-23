module.exports = async function (context, req) {
  const date = "2024-06-23T21:08:43.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

