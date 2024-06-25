module.exports = async function (context, req) {
  const date = "2024-06-25T21:09:52.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

