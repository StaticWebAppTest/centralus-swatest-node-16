module.exports = async function (context, req) {
  const date = "2023-10-09T12:18:19.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

