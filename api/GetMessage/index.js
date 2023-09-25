module.exports = async function (context, req) {
  const date = "2023-09-25T23:08:20.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

