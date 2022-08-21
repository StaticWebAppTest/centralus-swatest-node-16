module.exports = async function (context, req) {
  const date = "2022-08-21T05:13:56.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

