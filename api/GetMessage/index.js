module.exports = async function (context, req) {
  const date = "2023-05-19T18:10:44.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

