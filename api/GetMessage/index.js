module.exports = async function (context, req) {
  const date = "2023-01-07T05:08:25.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

