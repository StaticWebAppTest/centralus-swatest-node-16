module.exports = async function (context, req) {
  const date = "2023-11-21T05:09:14.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

