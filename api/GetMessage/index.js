module.exports = async function (context, req) {
  const date = "2022-11-21T18:13:32.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

