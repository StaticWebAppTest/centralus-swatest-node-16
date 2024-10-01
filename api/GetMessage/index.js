module.exports = async function (context, req) {
  const date = "2024-10-01T11:09:43.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

