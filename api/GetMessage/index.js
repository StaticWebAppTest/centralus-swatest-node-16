module.exports = async function (context, req) {
  const date = "2022-10-20T09:20:37.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

