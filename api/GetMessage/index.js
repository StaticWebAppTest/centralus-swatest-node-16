module.exports = async function (context, req) {
  const date = "2023-05-01T17:07:57.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

