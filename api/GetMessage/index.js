module.exports = async function (context, req) {
  const date = "2022-12-21T19:07:39.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

