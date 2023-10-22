module.exports = async function (context, req) {
  const date = "2023-10-22T19:07:20.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

