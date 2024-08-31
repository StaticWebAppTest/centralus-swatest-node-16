module.exports = async function (context, req) {
  const date = "2024-08-31T15:10:51.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

