module.exports = async function (context, req) {
  const date = "2022-11-17T17:12:40.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

