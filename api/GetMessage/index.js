module.exports = async function (context, req) {
  const date = "2023-08-07T17:07:37.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

