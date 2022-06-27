module.exports = async function (context, req) {
  const date = "2022-06-27T07:10:01.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

