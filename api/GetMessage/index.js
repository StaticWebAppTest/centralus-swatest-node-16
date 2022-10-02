module.exports = async function (context, req) {
  const date = "2022-10-02T06:22:27.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

