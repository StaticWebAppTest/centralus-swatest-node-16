module.exports = async function (context, req) {
  const date = "2023-05-15T15:09:12.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

