module.exports = async function (context, req) {
  const date = "2022-03-01T04:12:35.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

