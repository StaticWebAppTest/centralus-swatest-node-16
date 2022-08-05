module.exports = async function (context, req) {
  const date = "2022-08-05T22:10:33.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

