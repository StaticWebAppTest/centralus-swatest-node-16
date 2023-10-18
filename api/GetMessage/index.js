module.exports = async function (context, req) {
  const date = "2023-10-18T10:09:33.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

