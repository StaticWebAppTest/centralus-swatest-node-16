module.exports = async function (context, req) {
  const date = "2023-08-30T18:10:37.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

