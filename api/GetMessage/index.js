module.exports = async function (context, req) {
  const date = "2023-03-18T12:16:22.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

