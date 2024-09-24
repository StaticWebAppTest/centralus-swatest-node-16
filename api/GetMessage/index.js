module.exports = async function (context, req) {
  const date = "2024-09-24T19:09:27.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

