module.exports = async function (context, req) {
  const date = "2022-12-15T10:10:48.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

