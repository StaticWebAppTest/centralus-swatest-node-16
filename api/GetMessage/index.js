module.exports = async function (context, req) {
  const date = "2022-06-10T13:30:40.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

