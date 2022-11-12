module.exports = async function (context, req) {
  const date = "2022-11-12T14:09:35.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

