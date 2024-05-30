module.exports = async function (context, req) {
  const date = "2024-05-30T17:08:45.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

