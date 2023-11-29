module.exports = async function (context, req) {
  const date = "2023-11-29T10:10:16.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

