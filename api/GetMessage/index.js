module.exports = async function (context, req) {
  const date = "2023-09-08T14:07:52.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

