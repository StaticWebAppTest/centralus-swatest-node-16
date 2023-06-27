module.exports = async function (context, req) {
  const date = "2023-06-27T11:08:22.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

