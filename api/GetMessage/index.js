module.exports = async function (context, req) {
  const date = "2022-03-04T21:09:18.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

