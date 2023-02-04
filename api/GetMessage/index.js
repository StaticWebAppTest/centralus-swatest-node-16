module.exports = async function (context, req) {
  const date = "2023-02-04T22:08:28.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

