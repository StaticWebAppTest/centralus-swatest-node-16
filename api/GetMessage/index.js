module.exports = async function (context, req) {
  const date = "2022-06-08T12:23:28.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

