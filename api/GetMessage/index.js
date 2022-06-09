module.exports = async function (context, req) {
  const date = "2022-06-09T07:15:16.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

