module.exports = async function (context, req) {
  const date = "2024-03-20T15:09:57.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

