module.exports = async function (context, req) {
  const date = "2024-09-18T17:10:09.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

