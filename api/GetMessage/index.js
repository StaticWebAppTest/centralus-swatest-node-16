module.exports = async function (context, req) {
  const date = "2023-10-12T08:11:56.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

