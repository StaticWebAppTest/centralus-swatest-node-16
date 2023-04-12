module.exports = async function (context, req) {
  const date = "2023-04-12T21:07:47.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

