module.exports = async function (context, req) {
  const date = "2024-03-16T23:09:22.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

