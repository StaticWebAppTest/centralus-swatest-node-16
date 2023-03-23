module.exports = async function (context, req) {
  const date = "2023-03-23T03:09:34.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

