module.exports = async function (context, req) {
  const date = "2022-12-17T09:08:19.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

