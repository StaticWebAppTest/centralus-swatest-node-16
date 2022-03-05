module.exports = async function (context, req) {
  const date = "2022-03-05T20:10:33.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

