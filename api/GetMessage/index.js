module.exports = async function (context, req) {
  const date = "2024-08-05T17:10:04.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

