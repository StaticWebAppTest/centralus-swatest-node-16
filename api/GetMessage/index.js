module.exports = async function (context, req) {
  const date = "2022-07-10T13:19:53.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

