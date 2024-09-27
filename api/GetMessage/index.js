module.exports = async function (context, req) {
  const date = "2024-09-27T17:10:52.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

