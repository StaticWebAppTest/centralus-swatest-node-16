module.exports = async function (context, req) {
  const date = "2024-11-29T10:13:30.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

