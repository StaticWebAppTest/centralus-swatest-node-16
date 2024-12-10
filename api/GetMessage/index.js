module.exports = async function (context, req) {
  const date = "2024-12-10T01:03:14.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

