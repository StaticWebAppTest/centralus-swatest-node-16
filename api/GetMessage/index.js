module.exports = async function (context, req) {
  const date = "2023-08-21T06:11:44.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

