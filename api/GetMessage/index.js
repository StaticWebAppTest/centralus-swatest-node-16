module.exports = async function (context, req) {
  const date = "2023-10-29T06:10:48.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

