module.exports = async function (context, req) {
  const date = "2023-07-07T19:07:08.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

