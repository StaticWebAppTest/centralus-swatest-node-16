module.exports = async function (context, req) {
  const date = "2022-02-23T04:33:24.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

