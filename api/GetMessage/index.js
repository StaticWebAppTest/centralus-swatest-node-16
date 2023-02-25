module.exports = async function (context, req) {
  const date = "2023-02-25T17:08:26.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

