module.exports = async function (context, req) {
  const date = "2023-07-27T12:16:33.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

