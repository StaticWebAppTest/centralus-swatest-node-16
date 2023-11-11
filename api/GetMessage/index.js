module.exports = async function (context, req) {
  const date = "2023-11-11T04:10:28.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

