module.exports = async function (context, req) {
  const date = "2022-08-07T07:10:19.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

