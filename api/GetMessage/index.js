module.exports = async function (context, req) {
  const date = "2022-11-24T15:10:23.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

