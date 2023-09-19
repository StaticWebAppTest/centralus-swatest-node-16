module.exports = async function (context, req) {
  const date = "2023-09-19T12:16:59.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

