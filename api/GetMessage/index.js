module.exports = async function (context, req) {
  const date = "2022-08-30T16:15:40.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

