module.exports = async function (context, req) {
  const date = "2022-04-12T12:17:50.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

