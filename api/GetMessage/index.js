module.exports = async function (context, req) {
  const date = "2022-10-25T19:34:28.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

