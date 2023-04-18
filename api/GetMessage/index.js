module.exports = async function (context, req) {
  const date = "2023-04-18T18:11:19.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

