module.exports = async function (context, req) {
  const date = "2022-11-26T14:08:18.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

