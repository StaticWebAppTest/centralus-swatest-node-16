module.exports = async function (context, req) {
  const date = "2023-12-29T17:09:00.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

