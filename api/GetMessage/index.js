module.exports = async function (context, req) {
  const date = "2023-10-02T07:08:39.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

