module.exports = async function (context, req) {
  const date = "2022-03-06T18:11:02.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

