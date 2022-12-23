module.exports = async function (context, req) {
  const date = "2022-12-23T12:16:43.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

