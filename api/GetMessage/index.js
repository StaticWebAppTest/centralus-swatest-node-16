module.exports = async function (context, req) {
  const date = "2023-12-22T13:10:48.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

