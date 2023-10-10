module.exports = async function (context, req) {
  const date = "2023-10-10T01:42:49.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

