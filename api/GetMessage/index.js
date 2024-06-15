module.exports = async function (context, req) {
  const date = "2024-06-15T08:12:27.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

