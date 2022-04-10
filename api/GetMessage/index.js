module.exports = async function (context, req) {
  const date = "2022-04-10T15:10:31.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

