module.exports = async function (context, req) {
  const date = "2023-01-23T05:09:17.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

