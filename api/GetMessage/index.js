module.exports = async function (context, req) {
  const date = "2023-07-23T22:07:40.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

