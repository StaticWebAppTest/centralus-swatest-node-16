module.exports = async function (context, req) {
  const date = "2022-03-16T02:16:19.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

