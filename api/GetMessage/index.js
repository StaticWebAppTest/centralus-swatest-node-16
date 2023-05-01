module.exports = async function (context, req) {
  const date = "2023-05-01T23:09:47.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

