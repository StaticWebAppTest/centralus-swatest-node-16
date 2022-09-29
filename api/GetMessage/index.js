module.exports = async function (context, req) {
  const date = "2022-09-29T12:26:07.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

