module.exports = async function (context, req) {
  const date = "2024-05-30T21:10:25.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

