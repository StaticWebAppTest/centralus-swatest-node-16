module.exports = async function (context, req) {
  const date = "2024-03-29T11:09:19.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

