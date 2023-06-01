module.exports = async function (context, req) {
  const date = "2023-06-01T06:12:07.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

