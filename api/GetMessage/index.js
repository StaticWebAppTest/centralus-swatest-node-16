module.exports = async function (context, req) {
  const date = "2022-04-15T15:10:51.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

