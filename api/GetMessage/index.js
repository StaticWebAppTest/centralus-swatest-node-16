module.exports = async function (context, req) {
  const date = "2023-11-06T07:08:47.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

