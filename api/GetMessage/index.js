module.exports = async function (context, req) {
  const date = "2022-08-11T00:58:11.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

