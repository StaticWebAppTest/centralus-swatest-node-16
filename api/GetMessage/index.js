module.exports = async function (context, req) {
  const date = "2024-06-03T02:28:33.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

