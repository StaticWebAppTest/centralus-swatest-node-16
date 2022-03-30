module.exports = async function (context, req) {
  const date = "2022-03-30T16:12:25.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

