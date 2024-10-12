module.exports = async function (context, req) {
  const date = "2024-10-12T23:10:52.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

