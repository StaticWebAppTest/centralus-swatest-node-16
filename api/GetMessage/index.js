module.exports = async function (context, req) {
  const date = "2024-06-13T04:12:42.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

