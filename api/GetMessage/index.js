module.exports = async function (context, req) {
  const date = "2023-11-10T20:09:15.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

