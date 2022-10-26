module.exports = async function (context, req) {
  const date = "2022-10-26T21:11:19.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

