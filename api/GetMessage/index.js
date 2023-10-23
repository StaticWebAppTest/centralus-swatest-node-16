module.exports = async function (context, req) {
  const date = "2023-10-23T19:07:11.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

