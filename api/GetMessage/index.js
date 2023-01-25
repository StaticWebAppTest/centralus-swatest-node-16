module.exports = async function (context, req) {
  const date = "2023-01-25T18:10:44.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

