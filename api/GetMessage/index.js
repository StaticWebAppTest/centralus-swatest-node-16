module.exports = async function (context, req) {
  const date = "2024-07-24T16:13:04.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

