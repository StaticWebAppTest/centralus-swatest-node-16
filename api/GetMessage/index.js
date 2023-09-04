module.exports = async function (context, req) {
  const date = "2023-09-04T09:09:21.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

