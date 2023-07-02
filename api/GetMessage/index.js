module.exports = async function (context, req) {
  const date = "2023-07-02T17:07:59.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

