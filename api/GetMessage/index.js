module.exports = async function (context, req) {
  const date = "2022-10-30T03:47:12.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

