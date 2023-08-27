module.exports = async function (context, req) {
  const date = "2023-08-27T18:09:43.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

