module.exports = async function (context, req) {
  const date = "2023-12-08T23:09:06.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

