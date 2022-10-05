module.exports = async function (context, req) {
  const date = "2022-10-05T19:20:35.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

