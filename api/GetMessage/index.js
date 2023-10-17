module.exports = async function (context, req) {
  const date = "2023-10-17T04:10:38.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

