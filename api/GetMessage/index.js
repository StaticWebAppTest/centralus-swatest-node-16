module.exports = async function (context, req) {
  const date = "2022-10-31T20:13:39.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

