module.exports = async function (context, req) {
  const date = "2024-06-27T11:08:40.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

