module.exports = async function (context, req) {
  const date = "2023-02-18T05:08:33.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

