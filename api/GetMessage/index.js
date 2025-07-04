module.exports = async function (context, req) {
  const date = "2025-07-04T14:13:10.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

