module.exports = async function (context, req) {
  const date = "2023-04-18T16:10:22.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

