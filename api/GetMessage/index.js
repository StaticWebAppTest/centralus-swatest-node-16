module.exports = async function (context, req) {
  const date = "2023-03-23T04:11:04.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

