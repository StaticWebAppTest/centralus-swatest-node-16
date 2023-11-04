module.exports = async function (context, req) {
  const date = "2023-11-04T14:07:43.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

