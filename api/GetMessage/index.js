module.exports = async function (context, req) {
  const date = "2024-05-27T02:26:09.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

