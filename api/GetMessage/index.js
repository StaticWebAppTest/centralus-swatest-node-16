module.exports = async function (context, req) {
  const date = "2023-03-30T16:12:10.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

