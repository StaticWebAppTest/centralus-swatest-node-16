module.exports = async function (context, req) {
  const date = "2024-05-18T03:10:38.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

