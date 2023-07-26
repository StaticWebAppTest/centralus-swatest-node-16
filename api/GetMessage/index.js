module.exports = async function (context, req) {
  const date = "2023-07-26T10:09:12.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

