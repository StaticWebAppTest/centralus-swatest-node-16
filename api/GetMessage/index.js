module.exports = async function (context, req) {
  const date = "2022-03-29T00:50:13.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

