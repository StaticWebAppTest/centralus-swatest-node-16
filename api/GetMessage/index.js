module.exports = async function (context, req) {
  const date = "2023-09-15T16:11:08.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

