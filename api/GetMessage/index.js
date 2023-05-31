module.exports = async function (context, req) {
  const date = "2023-05-31T17:07:56.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

