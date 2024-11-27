module.exports = async function (context, req) {
  const date = "2024-11-27T11:10:37.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

