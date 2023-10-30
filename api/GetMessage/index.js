module.exports = async function (context, req) {
  const date = "2023-10-30T07:08:41.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

