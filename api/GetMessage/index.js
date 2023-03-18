module.exports = async function (context, req) {
  const date = "2023-03-18T10:09:17.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

