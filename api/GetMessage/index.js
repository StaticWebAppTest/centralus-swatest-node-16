module.exports = async function (context, req) {
  const date = "2023-03-03T06:13:12.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

