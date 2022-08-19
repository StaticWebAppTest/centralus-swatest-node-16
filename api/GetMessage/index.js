module.exports = async function (context, req) {
  const date = "2022-08-19T07:10:18.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

