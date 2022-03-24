module.exports = async function (context, req) {
  const date = "2022-03-24T05:09:32.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

