module.exports = async function (context, req) {
  const date = "2022-08-12T11:09:38.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

