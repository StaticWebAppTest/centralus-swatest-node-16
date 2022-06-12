module.exports = async function (context, req) {
  const date = "2022-06-12T23:10:04.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

