module.exports = async function (context, req) {
  const date = "2023-12-25T08:12:23.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

