module.exports = async function (context, req) {
  const date = "2022-11-30T07:09:50.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

