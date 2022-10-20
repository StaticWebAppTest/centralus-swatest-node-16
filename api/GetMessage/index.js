module.exports = async function (context, req) {
  const date = "2022-10-20T13:53:00.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

