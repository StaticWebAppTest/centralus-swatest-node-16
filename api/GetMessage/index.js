module.exports = async function (context, req) {
  const date = "2022-09-19T07:34:15.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

