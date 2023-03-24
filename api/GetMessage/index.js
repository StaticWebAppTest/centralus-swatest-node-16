module.exports = async function (context, req) {
  const date = "2023-03-24T10:09:51.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

