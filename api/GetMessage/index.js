module.exports = async function (context, req) {
  const date = "2024-09-15T22:11:01.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

