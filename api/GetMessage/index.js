module.exports = async function (context, req) {
  const date = "2023-03-08T08:13:20.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

