module.exports = async function (context, req) {
  const date = "2024-09-25T23:11:09.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

