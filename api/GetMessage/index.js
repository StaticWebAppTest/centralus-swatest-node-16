module.exports = async function (context, req) {
  const date = "2022-12-30T15:09:23.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

