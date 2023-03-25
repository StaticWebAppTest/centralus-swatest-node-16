module.exports = async function (context, req) {
  const date = "2023-03-25T18:10:24.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

