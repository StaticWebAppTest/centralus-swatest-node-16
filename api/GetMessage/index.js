module.exports = async function (context, req) {
  const date = "2023-06-17T17:07:11.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

