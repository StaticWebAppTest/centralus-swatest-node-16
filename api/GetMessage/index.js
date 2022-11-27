module.exports = async function (context, req) {
  const date = "2022-11-27T23:10:19.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

