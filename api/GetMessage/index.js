module.exports = async function (context, req) {
  const date = "2024-06-04T21:09:15.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

