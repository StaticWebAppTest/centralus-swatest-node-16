module.exports = async function (context, req) {
  const date = "2022-08-10T14:09:55.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

