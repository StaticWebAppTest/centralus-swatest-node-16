module.exports = async function (context, req) {
  const date = "2023-11-21T16:12:45.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

