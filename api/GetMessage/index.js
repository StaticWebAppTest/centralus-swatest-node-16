module.exports = async function (context, req) {
  const date = "2023-05-19T04:10:22.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

