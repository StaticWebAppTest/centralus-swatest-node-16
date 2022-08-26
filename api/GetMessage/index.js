module.exports = async function (context, req) {
  const date = "2022-08-26T22:11:03.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

