module.exports = async function (context, req) {
  const date = "2022-07-25T22:10:04.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

