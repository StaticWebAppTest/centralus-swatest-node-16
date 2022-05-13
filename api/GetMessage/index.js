module.exports = async function (context, req) {
  const date = "2022-05-13T23:12:01.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

