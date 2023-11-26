module.exports = async function (context, req) {
  const date = "2023-11-26T10:09:04.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

