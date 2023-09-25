module.exports = async function (context, req) {
  const date = "2023-09-25T19:07:03.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

