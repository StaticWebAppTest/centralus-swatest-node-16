module.exports = async function (context, req) {
  const date = "2023-11-27T01:51:47.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

