module.exports = async function (context, req) {
  const date = "2022-03-20T15:10:51.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

