module.exports = async function (context, req) {
  const date = "2023-07-20T16:11:11.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

