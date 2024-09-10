module.exports = async function (context, req) {
  const date = "2024-09-10T23:10:39.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

