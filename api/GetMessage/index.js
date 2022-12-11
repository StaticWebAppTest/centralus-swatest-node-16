module.exports = async function (context, req) {
  const date = "2022-12-11T02:22:31.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

