module.exports = async function (context, req) {
  const date = "2023-10-02T05:08:37.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

