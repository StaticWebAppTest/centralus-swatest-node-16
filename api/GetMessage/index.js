module.exports = async function (context, req) {
  const date = "2023-07-10T03:24:32.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

