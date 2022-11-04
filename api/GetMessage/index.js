module.exports = async function (context, req) {
  const date = "2022-11-04T17:15:36.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

