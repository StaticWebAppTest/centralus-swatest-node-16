module.exports = async function (context, req) {
  const date = "2023-12-26T16:10:52.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

