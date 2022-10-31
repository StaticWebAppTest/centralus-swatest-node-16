module.exports = async function (context, req) {
  const date = "2022-10-31T03:42:04.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

