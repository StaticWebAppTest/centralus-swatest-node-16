module.exports = async function (context, req) {
  const date = "2023-05-29T10:09:33.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

