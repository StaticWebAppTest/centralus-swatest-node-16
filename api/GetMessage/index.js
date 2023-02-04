module.exports = async function (context, req) {
  const date = "2023-02-04T23:08:51.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

