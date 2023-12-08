module.exports = async function (context, req) {
  const date = "2023-12-08T01:52:34.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

