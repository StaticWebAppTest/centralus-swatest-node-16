module.exports = async function (context, req) {
  const date = "2022-10-29T15:12:36.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

