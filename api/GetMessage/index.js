module.exports = async function (context, req) {
  const date = "2024-09-29T12:20:11.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

