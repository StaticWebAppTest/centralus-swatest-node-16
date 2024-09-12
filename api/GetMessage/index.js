module.exports = async function (context, req) {
  const date = "2024-09-12T08:14:39.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

