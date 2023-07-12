module.exports = async function (context, req) {
  const date = "2023-07-12T02:51:42.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

