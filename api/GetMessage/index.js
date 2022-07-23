module.exports = async function (context, req) {
  const date = "2022-07-23T06:13:17.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

