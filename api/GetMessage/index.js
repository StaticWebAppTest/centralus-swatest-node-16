module.exports = async function (context, req) {
  const date = "2022-04-01T09:10:47.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

