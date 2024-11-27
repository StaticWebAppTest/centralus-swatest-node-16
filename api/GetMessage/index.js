module.exports = async function (context, req) {
  const date = "2024-11-27T23:12:05.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

