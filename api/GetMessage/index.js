module.exports = async function (context, req) {
  const date = "2023-12-02T13:09:21.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

