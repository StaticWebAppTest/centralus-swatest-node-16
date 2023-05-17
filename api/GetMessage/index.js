module.exports = async function (context, req) {
  const date = "2023-05-17T13:11:34.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

