module.exports = async function (context, req) {
  const date = "2024-09-04T13:18:19.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

