module.exports = async function (context, req) {
  const date = "2022-04-16T17:11:56.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

