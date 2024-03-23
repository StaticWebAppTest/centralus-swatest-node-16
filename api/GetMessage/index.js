module.exports = async function (context, req) {
  const date = "2024-03-23T16:09:45.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

