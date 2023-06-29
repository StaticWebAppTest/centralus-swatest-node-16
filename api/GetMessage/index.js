module.exports = async function (context, req) {
  const date = "2023-06-29T12:18:31.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

