module.exports = async function (context, req) {
  const date = "2023-05-20T13:08:50.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

