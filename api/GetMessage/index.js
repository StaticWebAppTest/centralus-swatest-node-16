module.exports = async function (context, req) {
  const date = "2023-04-13T06:11:48.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

