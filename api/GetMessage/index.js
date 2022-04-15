module.exports = async function (context, req) {
  const date = "2022-04-15T23:11:09.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

