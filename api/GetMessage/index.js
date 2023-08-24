module.exports = async function (context, req) {
  const date = "2023-08-24T04:09:57.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

