module.exports = async function (context, req) {
  const date = "2022-06-09T20:11:39.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

