module.exports = async function (context, req) {
  const date = "2023-02-12T04:11:32.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

