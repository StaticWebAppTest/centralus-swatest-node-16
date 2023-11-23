module.exports = async function (context, req) {
  const date = "2023-11-23T18:11:28.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

