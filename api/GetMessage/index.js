module.exports = async function (context, req) {
  const date = "2023-09-05T09:08:52.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

