module.exports = async function (context, req) {
  const date = "2023-11-10T08:11:28.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

