module.exports = async function (context, req) {
  const date = "2024-05-18T11:07:32.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

