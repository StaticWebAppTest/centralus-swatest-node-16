module.exports = async function (context, req) {
  const date = "2022-05-19T22:10:29.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

