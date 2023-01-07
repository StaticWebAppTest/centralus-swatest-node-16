module.exports = async function (context, req) {
  const date = "2023-01-07T04:10:51.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

