module.exports = async function (context, req) {
  const date = "2023-08-11T22:07:46.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

