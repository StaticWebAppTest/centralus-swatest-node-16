module.exports = async function (context, req) {
  const date = "2024-05-21T18:12:26.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

