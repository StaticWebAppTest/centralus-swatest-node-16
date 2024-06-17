module.exports = async function (context, req) {
  const date = "2024-06-17T13:13:12.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

