module.exports = async function (context, req) {
  const date = "2022-05-31T06:14:47.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

