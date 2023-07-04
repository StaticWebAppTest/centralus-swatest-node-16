module.exports = async function (context, req) {
  const date = "2023-07-04T23:09:54.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

