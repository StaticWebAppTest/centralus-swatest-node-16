module.exports = async function (context, req) {
  const date = "2022-08-03T07:10:13.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

