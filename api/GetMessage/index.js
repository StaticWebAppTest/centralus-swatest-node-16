module.exports = async function (context, req) {
  const date = "2024-07-04T18:13:21.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

