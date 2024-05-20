module.exports = async function (context, req) {
  const date = "2024-05-20T07:10:21.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

