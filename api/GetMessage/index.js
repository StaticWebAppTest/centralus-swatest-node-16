module.exports = async function (context, req) {
  const date = "2024-06-13T07:09:50.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

