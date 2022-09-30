module.exports = async function (context, req) {
  const date = "2022-09-30T11:11:11.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

