module.exports = async function (context, req) {
  const date = "2023-08-12T16:09:36.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

