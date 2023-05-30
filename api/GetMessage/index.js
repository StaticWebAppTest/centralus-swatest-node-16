module.exports = async function (context, req) {
  const date = "2023-05-30T15:08:53.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

