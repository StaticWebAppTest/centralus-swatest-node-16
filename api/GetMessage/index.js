module.exports = async function (context, req) {
  const date = "2022-11-16T12:20:43.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

