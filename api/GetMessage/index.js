module.exports = async function (context, req) {
  const date = "2023-10-03T19:07:08.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

