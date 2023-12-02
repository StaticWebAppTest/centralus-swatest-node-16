module.exports = async function (context, req) {
  const date = "2023-12-02T19:07:23.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

