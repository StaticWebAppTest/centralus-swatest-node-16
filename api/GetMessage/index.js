module.exports = async function (context, req) {
  const date = "2022-07-11T11:08:12.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

