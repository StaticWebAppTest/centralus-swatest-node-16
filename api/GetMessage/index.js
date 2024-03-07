module.exports = async function (context, req) {
  const date = "2024-03-07T05:08:18.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

