module.exports = async function (context, req) {
  const date = "2022-10-18T22:14:07.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

