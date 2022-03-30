module.exports = async function (context, req) {
  const date = "2022-03-30T22:10:17.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

