module.exports = async function (context, req) {
  const date = "2022-07-27T07:10:50.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

