module.exports = async function (context, req) {
  const date = "2022-04-06T07:10:38.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

