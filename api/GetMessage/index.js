module.exports = async function (context, req) {
  const date = "2024-03-05T17:09:52.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

