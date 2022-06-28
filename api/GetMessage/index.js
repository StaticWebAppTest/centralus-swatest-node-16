module.exports = async function (context, req) {
  const date = "2022-06-28T22:11:54.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

