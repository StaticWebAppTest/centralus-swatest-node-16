module.exports = async function (context, req) {
  const date = "2022-02-24T21:09:02.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

