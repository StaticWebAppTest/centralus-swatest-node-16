module.exports = async function (context, req) {
  const date = "2023-03-14T08:14:25.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

