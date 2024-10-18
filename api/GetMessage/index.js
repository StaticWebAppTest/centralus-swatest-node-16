module.exports = async function (context, req) {
  const date = "2024-10-18T15:12:09.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

