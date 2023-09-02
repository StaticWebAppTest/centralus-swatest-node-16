module.exports = async function (context, req) {
  const date = "2023-09-02T05:07:27.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

