module.exports = async function (context, req) {
  const date = "2024-05-29T07:09:50.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

