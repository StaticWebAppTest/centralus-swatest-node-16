module.exports = async function (context, req) {
  const date = "2023-12-06T07:08:51.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

