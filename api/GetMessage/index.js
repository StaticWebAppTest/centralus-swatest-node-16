module.exports = async function (context, req) {
  const date = "2022-04-06T17:12:31.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

