module.exports = async function (context, req) {
  const date = "2023-03-30T18:10:35.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

