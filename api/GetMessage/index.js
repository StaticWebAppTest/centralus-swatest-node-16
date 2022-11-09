module.exports = async function (context, req) {
  const date = "2022-11-09T11:10:48.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

