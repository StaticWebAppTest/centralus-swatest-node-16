module.exports = async function (context, req) {
  const date = "2023-07-21T07:08:10.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

