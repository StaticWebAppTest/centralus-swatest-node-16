module.exports = async function (context, req) {
  const date = "2023-06-16T22:08:04.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

