module.exports = async function (context, req) {
  const date = "2022-03-28T04:12:48.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

