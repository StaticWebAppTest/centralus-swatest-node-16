module.exports = async function (context, req) {
  const date = "2023-05-29T17:07:47.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

