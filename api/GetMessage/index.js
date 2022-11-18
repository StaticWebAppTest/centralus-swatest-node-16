module.exports = async function (context, req) {
  const date = "2022-11-18T12:20:33.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

