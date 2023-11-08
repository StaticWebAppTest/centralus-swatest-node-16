module.exports = async function (context, req) {
  const date = "2023-11-08T06:12:06.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

