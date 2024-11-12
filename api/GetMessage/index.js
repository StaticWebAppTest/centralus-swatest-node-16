module.exports = async function (context, req) {
  const date = "2024-11-12T14:11:17.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

