module.exports = async function (context, req) {
  const date = "2022-06-09T11:09:03.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

