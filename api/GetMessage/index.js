module.exports = async function (context, req) {
  const date = "2023-02-04T21:08:19.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

