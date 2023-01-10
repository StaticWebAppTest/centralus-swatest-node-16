module.exports = async function (context, req) {
  const date = "2023-01-10T13:18:45.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

