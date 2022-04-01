module.exports = async function (context, req) {
  const date = "2022-04-01T20:11:12.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

