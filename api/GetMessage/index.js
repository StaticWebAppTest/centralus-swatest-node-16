module.exports = async function (context, req) {
  const date = "2024-07-28T04:11:57.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

