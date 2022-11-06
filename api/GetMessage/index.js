module.exports = async function (context, req) {
  const date = "2022-11-06T07:10:40.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

