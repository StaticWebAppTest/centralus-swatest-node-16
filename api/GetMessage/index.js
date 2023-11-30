module.exports = async function (context, req) {
  const date = "2023-11-30T11:07:56.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

