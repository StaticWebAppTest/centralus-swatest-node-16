module.exports = async function (context, req) {
  const date = "2023-05-13T00:44:40.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

