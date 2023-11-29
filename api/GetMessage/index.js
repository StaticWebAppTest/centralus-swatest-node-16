module.exports = async function (context, req) {
  const date = "2023-11-29T16:12:04.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

