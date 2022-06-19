module.exports = async function (context, req) {
  const date = "2022-06-19T18:11:42.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

