module.exports = async function (context, req) {
  const date = "2022-12-14T21:09:16.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

