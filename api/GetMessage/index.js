module.exports = async function (context, req) {
  const date = "2023-08-15T23:07:42.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

