module.exports = async function (context, req) {
  const date = "2023-10-08T22:07:24.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

