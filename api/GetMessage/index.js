module.exports = async function (context, req) {
  const date = "2022-09-30T22:14:15.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

