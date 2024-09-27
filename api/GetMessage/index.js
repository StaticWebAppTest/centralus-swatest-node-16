module.exports = async function (context, req) {
  const date = "2024-09-27T13:20:13.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

