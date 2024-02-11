module.exports = async function (context, req) {
  const date = "2024-02-11T22:07:37.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

