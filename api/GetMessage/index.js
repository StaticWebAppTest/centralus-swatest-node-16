module.exports = async function (context, req) {
  const date = "2023-09-10T01:44:50.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

