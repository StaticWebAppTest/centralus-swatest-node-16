module.exports = async function (context, req) {
  const date = "2023-03-23T07:08:38.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

