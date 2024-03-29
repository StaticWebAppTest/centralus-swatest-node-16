module.exports = async function (context, req) {
  const date = "2024-03-29T10:10:08.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

