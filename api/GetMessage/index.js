module.exports = async function (context, req) {
  const date = "2023-05-10T03:09:15.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

