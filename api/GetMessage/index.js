module.exports = async function (context, req) {
  const date = "2023-09-25T14:08:51.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

