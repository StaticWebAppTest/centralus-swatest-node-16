module.exports = async function (context, req) {
  const date = "2022-12-19T23:09:23.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

