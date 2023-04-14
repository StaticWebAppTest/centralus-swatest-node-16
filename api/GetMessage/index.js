module.exports = async function (context, req) {
  const date = "2023-04-14T10:09:36.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

