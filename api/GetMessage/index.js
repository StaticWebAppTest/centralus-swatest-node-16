module.exports = async function (context, req) {
  const date = "2023-12-04T16:12:16.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

