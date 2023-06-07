module.exports = async function (context, req) {
  const date = "2023-06-07T18:11:13.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

