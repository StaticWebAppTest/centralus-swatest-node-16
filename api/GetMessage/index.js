module.exports = async function (context, req) {
  const date = "2024-07-08T22:10:45.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

