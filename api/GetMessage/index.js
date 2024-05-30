module.exports = async function (context, req) {
  const date = "2024-05-30T04:14:03.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

