module.exports = async function (context, req) {
  const date = "2022-03-10T23:10:34.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

