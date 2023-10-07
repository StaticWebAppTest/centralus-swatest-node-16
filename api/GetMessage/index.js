module.exports = async function (context, req) {
  const date = "2023-10-07T21:07:01.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

