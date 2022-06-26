module.exports = async function (context, req) {
  const date = "2022-06-26T08:12:37.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

