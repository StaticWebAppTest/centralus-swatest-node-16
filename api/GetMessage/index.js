module.exports = async function (context, req) {
  const date = "2023-07-29T16:09:30.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

