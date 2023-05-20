module.exports = async function (context, req) {
  const date = "2023-05-20T16:09:54.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

