module.exports = async function (context, req) {
  const date = "2024-05-20T23:10:18.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

