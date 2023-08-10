module.exports = async function (context, req) {
  const date = "2023-08-10T23:08:12.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

