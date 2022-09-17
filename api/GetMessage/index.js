module.exports = async function (context, req) {
  const date = "2022-09-17T04:57:07.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

