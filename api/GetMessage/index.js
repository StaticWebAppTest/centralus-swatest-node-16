module.exports = async function (context, req) {
  const date = "2025-03-12T11:10:33.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

