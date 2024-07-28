module.exports = async function (context, req) {
  const date = "2024-07-28T12:17:39.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

