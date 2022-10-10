module.exports = async function (context, req) {
  const date = "2022-10-10T01:15:18.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

