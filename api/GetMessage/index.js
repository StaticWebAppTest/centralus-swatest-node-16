module.exports = async function (context, req) {
  const date = "2023-05-22T19:07:09.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

