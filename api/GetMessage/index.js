module.exports = async function (context, req) {
  const date = "2023-09-15T21:07:25.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

