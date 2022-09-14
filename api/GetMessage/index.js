module.exports = async function (context, req) {
  const date = "2022-09-14T17:22:50.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

