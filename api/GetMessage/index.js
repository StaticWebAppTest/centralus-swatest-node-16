module.exports = async function (context, req) {
  const date = "2022-05-16T19:09:03.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

