module.exports = async function (context, req) {
  const date = "2024-01-02T18:12:02.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

