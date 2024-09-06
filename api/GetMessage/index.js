module.exports = async function (context, req) {
  const date = "2024-09-06T17:09:46.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

