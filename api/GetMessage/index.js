module.exports = async function (context, req) {
  const date = "2023-01-18T18:11:27.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

