module.exports = async function (context, req) {
  const date = "2023-08-30T01:41:31.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

