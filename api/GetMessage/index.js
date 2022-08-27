module.exports = async function (context, req) {
  const date = "2022-08-27T16:13:36.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

