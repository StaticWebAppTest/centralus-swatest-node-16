module.exports = async function (context, req) {
  const date = "2024-06-29T10:10:00.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

