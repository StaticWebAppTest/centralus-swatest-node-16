module.exports = async function (context, req) {
  const date = "2023-06-04T05:08:17.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

