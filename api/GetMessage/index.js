module.exports = async function (context, req) {
  const date = "2023-07-04T16:13:14.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

