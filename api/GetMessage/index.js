module.exports = async function (context, req) {
  const date = "2022-12-31T19:06:45.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

