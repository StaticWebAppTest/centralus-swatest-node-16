module.exports = async function (context, req) {
  const date = "2022-03-26T15:10:15.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

