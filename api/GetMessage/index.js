module.exports = async function (context, req) {
  const date = "2022-06-20T04:19:23.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

