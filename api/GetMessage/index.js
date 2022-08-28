module.exports = async function (context, req) {
  const date = "2022-08-28T15:11:11.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

