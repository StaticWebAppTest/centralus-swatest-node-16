module.exports = async function (context, req) {
  const date = "2022-10-30T05:19:35.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

