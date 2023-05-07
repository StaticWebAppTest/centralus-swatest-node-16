module.exports = async function (context, req) {
  const date = "2023-05-07T21:08:28.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

