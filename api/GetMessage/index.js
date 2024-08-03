module.exports = async function (context, req) {
  const date = "2024-08-03T20:10:09.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

