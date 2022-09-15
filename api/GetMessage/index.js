module.exports = async function (context, req) {
  const date = "2022-09-15T22:12:17.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

