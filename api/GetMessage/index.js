module.exports = async function (context, req) {
  const date = "2022-07-26T11:09:10.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

