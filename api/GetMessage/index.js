module.exports = async function (context, req) {
  const date = "2023-07-02T06:11:56.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

