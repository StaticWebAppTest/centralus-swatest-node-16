module.exports = async function (context, req) {
  const date = "2022-10-09T06:19:21.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

