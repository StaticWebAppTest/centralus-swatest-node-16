module.exports = async function (context, req) {
  const date = "2022-06-16T09:10:59.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

