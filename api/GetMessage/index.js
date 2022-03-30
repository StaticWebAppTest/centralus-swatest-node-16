module.exports = async function (context, req) {
  const date = "2022-03-30T14:09:51.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

