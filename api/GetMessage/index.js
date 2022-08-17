module.exports = async function (context, req) {
  const date = "2022-08-17T21:09:47.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

