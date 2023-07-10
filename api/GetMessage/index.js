module.exports = async function (context, req) {
  const date = "2023-07-10T00:59:47.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

