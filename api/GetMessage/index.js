module.exports = async function (context, req) {
  const date = "2023-09-10T00:42:26.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

