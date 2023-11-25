module.exports = async function (context, req) {
  const date = "2023-11-25T21:07:33.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

