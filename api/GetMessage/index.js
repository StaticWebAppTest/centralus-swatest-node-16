module.exports = async function (context, req) {
  const date = "2024-12-04T12:24:53.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

