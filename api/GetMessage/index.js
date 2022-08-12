module.exports = async function (context, req) {
  const date = "2022-08-12T00:58:00.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

