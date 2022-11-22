module.exports = async function (context, req) {
  const date = "2022-11-22T17:12:20.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

