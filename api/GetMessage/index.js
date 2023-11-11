module.exports = async function (context, req) {
  const date = "2023-11-11T17:07:25.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

