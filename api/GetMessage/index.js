module.exports = async function (context, req) {
  const date = "2023-02-26T11:07:48.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

