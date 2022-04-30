module.exports = async function (context, req) {
  const date = "2022-04-30T15:10:52.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

