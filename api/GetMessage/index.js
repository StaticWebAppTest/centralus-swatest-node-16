module.exports = async function (context, req) {
  const date = "2023-07-21T21:07:25.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

