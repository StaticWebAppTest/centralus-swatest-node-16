module.exports = async function (context, req) {
  const date = "2023-10-13T00:42:03.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

