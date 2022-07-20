module.exports = async function (context, req) {
  const date = "2022-07-20T13:36:27.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

