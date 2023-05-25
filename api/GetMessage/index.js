module.exports = async function (context, req) {
  const date = "2023-05-25T21:07:44.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

