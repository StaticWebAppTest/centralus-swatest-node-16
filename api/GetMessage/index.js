module.exports = async function (context, req) {
  const date = "2024-04-09T19:07:11.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

