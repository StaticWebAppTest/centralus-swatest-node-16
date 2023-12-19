module.exports = async function (context, req) {
  const date = "2023-12-19T22:07:59.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

