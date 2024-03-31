module.exports = async function (context, req) {
  const date = "2024-03-31T17:08:10.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

