module.exports = async function (context, req) {
  const date = "2022-03-19T04:12:22.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

