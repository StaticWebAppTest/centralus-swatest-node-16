module.exports = async function (context, req) {
  const date = "2023-05-26T21:07:40.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

