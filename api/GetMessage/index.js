module.exports = async function (context, req) {
  const date = "2023-11-01T06:12:12.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

