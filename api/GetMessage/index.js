module.exports = async function (context, req) {
  const date = "2023-11-30T06:12:23.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

