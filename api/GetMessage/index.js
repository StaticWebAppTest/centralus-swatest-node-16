module.exports = async function (context, req) {
  const date = "2023-10-08T20:08:22.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

