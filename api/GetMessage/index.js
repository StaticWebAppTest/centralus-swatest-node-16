module.exports = async function (context, req) {
  const date = "2022-06-14T01:04:28.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

