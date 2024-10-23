module.exports = async function (context, req) {
  const date = "2024-10-23T07:12:35.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

