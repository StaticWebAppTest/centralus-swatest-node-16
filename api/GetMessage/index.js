module.exports = async function (context, req) {
  const date = "2022-09-24T22:11:15.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

