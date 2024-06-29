module.exports = async function (context, req) {
  const date = "2024-06-29T02:27:07.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

