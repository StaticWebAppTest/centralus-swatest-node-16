module.exports = async function (context, req) {
  const date = "2022-11-09T10:12:31.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

