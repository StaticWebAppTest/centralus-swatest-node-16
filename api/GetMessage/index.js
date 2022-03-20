module.exports = async function (context, req) {
  const date = "2022-03-20T23:09:31.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

