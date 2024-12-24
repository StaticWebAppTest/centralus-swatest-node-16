module.exports = async function (context, req) {
  const date = "2024-12-24T14:10:35.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

