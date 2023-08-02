module.exports = async function (context, req) {
  const date = "2023-08-02T05:08:27.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

