module.exports = async function (context, req) {
  const date = "2022-11-22T01:00:18.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

