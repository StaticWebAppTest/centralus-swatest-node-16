module.exports = async function (context, req) {
  const date = "2022-10-27T20:12:54.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

