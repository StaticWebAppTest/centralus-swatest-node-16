module.exports = async function (context, req) {
  const date = "2023-09-12T23:08:22.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

