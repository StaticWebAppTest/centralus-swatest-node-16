module.exports = async function (context, req) {
  const date = "2023-07-11T22:09:15.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

