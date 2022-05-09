module.exports = async function (context, req) {
  const date = "2022-05-09T02:54:54.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

