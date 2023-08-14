module.exports = async function (context, req) {
  const date = "2023-08-14T16:10:03.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

