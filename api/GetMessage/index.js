module.exports = async function (context, req) {
  const date = "2023-07-16T07:08:27.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

