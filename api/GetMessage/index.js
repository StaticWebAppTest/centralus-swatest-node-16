module.exports = async function (context, req) {
  const date = "2023-05-05T21:07:23.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

