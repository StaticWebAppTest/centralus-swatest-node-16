module.exports = async function (context, req) {
  const date = "2023-08-20T12:13:54.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

