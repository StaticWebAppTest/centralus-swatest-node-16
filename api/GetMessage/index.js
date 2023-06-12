module.exports = async function (context, req) {
  const date = "2023-06-12T08:11:51.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

