module.exports = async function (context, req) {
  const date = "2023-06-02T04:10:33.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

