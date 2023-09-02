module.exports = async function (context, req) {
  const date = "2023-09-02T15:07:19.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

