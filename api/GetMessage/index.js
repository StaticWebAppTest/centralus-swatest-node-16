module.exports = async function (context, req) {
  const date = "2023-02-04T12:16:08.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

