module.exports = async function (context, req) {
  const date = "2022-05-25T20:12:12.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

