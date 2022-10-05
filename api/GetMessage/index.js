module.exports = async function (context, req) {
  const date = "2022-10-05T12:25:45.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

