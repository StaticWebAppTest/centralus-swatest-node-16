module.exports = async function (context, req) {
  const date = "2024-11-25T07:12:53.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

