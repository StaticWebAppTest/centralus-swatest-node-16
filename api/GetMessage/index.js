module.exports = async function (context, req) {
  const date = "2023-11-22T18:11:46.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

