module.exports = async function (context, req) {
  const date = "2022-03-08T12:16:32.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

