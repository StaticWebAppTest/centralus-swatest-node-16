module.exports = async function (context, req) {
  const date = "2022-08-19T13:33:47.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

