module.exports = async function (context, req) {
  const date = "2022-11-29T17:08:45.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

