module.exports = async function (context, req) {
  const date = "2022-05-30T08:15:31.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

