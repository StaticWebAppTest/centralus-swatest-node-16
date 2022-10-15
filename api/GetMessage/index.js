module.exports = async function (context, req) {
  const date = "2022-10-15T11:10:32.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

