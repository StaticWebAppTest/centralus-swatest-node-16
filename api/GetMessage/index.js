module.exports = async function (context, req) {
  const date = "2024-06-27T14:09:52.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

