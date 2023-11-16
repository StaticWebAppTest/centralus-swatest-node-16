module.exports = async function (context, req) {
  const date = "2023-11-16T02:23:10.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

