module.exports = async function (context, req) {
  const date = "2022-05-20T06:14:13.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

