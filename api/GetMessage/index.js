module.exports = async function (context, req) {
  const date = "2022-07-07T07:10:17.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

