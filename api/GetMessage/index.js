module.exports = async function (context, req) {
  const date = "2022-05-30T23:11:42.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

