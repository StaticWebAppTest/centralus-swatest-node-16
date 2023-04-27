module.exports = async function (context, req) {
  const date = "2023-04-27T03:09:42.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

