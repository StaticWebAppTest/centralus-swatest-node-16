module.exports = async function (context, req) {
  const date = "2022-03-25T04:13:24.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

