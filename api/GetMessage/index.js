module.exports = async function (context, req) {
  const date = "2023-05-12T18:10:37.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

