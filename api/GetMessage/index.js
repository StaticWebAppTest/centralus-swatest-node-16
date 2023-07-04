module.exports = async function (context, req) {
  const date = "2023-07-04T20:10:40.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

