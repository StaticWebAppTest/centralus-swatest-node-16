module.exports = async function (context, req) {
  const date = "2023-08-17T13:09:42.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

