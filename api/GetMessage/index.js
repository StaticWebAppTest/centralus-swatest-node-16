module.exports = async function (context, req) {
  const date = "2022-10-30T17:14:17.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

