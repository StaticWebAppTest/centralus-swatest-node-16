module.exports = async function (context, req) {
  const date = "2023-10-30T18:11:40.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

