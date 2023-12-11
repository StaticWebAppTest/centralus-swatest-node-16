module.exports = async function (context, req) {
  const date = "2023-12-11T16:12:41.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

