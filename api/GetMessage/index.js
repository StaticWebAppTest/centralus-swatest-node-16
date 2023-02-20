module.exports = async function (context, req) {
  const date = "2023-02-20T23:09:45.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

