module.exports = async function (context, req) {
  const date = "2023-05-20T06:10:59.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

