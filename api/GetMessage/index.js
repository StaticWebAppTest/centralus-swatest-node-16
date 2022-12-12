module.exports = async function (context, req) {
  const date = "2022-12-12T18:12:17.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

