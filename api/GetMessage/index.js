module.exports = async function (context, req) {
  const date = "2023-02-24T17:09:37.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

