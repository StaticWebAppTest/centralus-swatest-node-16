module.exports = async function (context, req) {
  const date = "2023-12-27T17:07:37.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

