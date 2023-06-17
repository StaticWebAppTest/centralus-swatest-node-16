module.exports = async function (context, req) {
  const date = "2023-06-17T07:08:01.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

