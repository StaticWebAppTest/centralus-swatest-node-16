module.exports = async function (context, req) {
  const date = "2022-10-26T11:10:28.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

