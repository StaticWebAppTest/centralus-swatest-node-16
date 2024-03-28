module.exports = async function (context, req) {
  const date = "2024-03-28T12:17:28.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

