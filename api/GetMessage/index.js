module.exports = async function (context, req) {
  const date = "2022-04-04T21:09:25.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

