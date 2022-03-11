module.exports = async function (context, req) {
  const date = "2022-03-11T10:11:23.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

