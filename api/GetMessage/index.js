module.exports = async function (context, req) {
  const date = "2022-07-25T07:10:48.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

