module.exports = async function (context, req) {
  const date = "2023-12-20T06:10:15.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

