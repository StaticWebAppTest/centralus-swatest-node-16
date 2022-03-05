module.exports = async function (context, req) {
  const date = "2022-03-05T10:10:12.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

