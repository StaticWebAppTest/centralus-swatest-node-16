module.exports = async function (context, req) {
  const date = "2022-08-13T17:11:18.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

